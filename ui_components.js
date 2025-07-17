import DataManager from './data_manager.js';import { debounce, formatCurrency, calculateContractMetrics } from './utils.js';import { generateContractPDF, generateInitiationPDF, generateCompletionPDF, generateInvoicePDF, generateEmploymentCertificatePDF, generateCareerCertificatePDF } from './pdf_generator.js';const mainContent = document.getElementById('main-content');const headerActions = document.getElementById('header-actions');const notificationContainer = document.getElementById('notification-bell-container');const statusOptions = { '진행중': 'status-in-progress', '중지중': 'status-halted', '보류중': 'status-pending', '완료': 'status-completed' };const projectCategories = ['PQ', '공공', '공공(하)', '민간'];const contractTypes = ['최초', '변경', '차수분'];function createProjectListItem(project) {
    const statusClass = statusOptions[project.status] || 'text-gray-400';
    return `
        <a href="#project/${project.projectId}" class="card block p-6 hover:bg-gray-700/50 hover:border-blue-400/50 transition-all duration-200 fade-in">
            <div class="flex justify-between items-start">
                <div>
                    <p class="text-sm font-medium ${statusClass}">${project.status}</p>
                    <h3 class="text-lg font-bold text-gray-100 mt-1">${project.projectName || '제목 없는 프로젝트'}</h3>
                </div>
                <div class="text-right flex-shrink-0 ml-4">
                    <p class="text-xs text-gray-500">${project.projectId}</p>
                </div>
            </div>
        </a>
    `;
}export function renderDashboard() {
    renderHeaderActions('dashboard');
    const projects = DataManager.getProjects();
    const dashboardHTML = `
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-3xl font-bold tracking-tight text-white">프로젝트 대시보드</h1>
            <div id="filter-container">
                <select id="status-filter" class="form-select text-sm">${['all',...Object.keys(statusOptions)].map(s=>`<option value="${s}">${s==='all'?'모든 상태':s}</option>`).join('')}</select>
            </div>
        </div>
        <div id="project-list" class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${projects.length > 0 ? projects.map(createProjectListItem).join('') : '<p class="text-gray-400 text-center py-12 card">프로젝트가 없습니다. 새 프로젝트를 추가해주세요.</p>'}
        </div>`;
    mainContent.innerHTML = dashboardHTML;
    lucide.createIcons();
    document.getElementById('status-filter').addEventListener('change', (e) => {
        const filteredProjects = DataManager.getProjects({ status: e.target.value });
        document.getElementById('project-list').innerHTML = filteredProjects.length > 0 ? filteredProjects.map(createProjectListItem).join('') : '<p class="text-gray-400 text-center py-12 card">해당 상태의 프로젝트가 없습니다.</p>';
        lucide.createIcons();
    });
}export function renderProjectDetail(projectId) {
    const project = DataManager.getProjectById(projectId);
    if (!project) { window.location.hash = '#'; return; }
    const contracts = DataManager.getContractsByProjectId(projectId);
    const activeContract = contracts.length > 0 ? contracts[0] : null;
    renderHeaderActions('detail', { projectId, activeContract });
    const detailHTML = `<div class="space-y-8 fade-in"><form id="project-form" class="card p-8"><h2 class="text-2xl font-bold">프로젝트 정보</h2></form></div>`;
    mainContent.innerHTML = detailHTML;

    lucide.createIcons();
}export function renderClientDashboard() {
    renderHeaderActions('clients');
    const clients = DataManager.getClients();
    const html = `<div class="flex justify-between items-center mb-6"><h1 class="text-3xl font-bold">거래처 관리</h1></div>
        <div class="bg-gray-800/50 rounded-lg border border-gray-700">
        <table class="min-w-full">
            <thead class="bg-gray-800"><tr><th class="p-4 text-left">거래처명</th><th class="p-4 text-left">사업자번호</th><th></th></tr></thead>
            <tbody>${clients.map(c => `<tr><td class="p-4">${c.clientName}</td><td class="p-4">${c.businessRegistrationNumber}</td><td class="p-4 text-right"><a href="#client/${c.clientId}" class="text-blue-400">상세</a></td></tr>`).join('')}</tbody>
        </table></div>`;
    mainContent.innerHTML = html;
}export function renderClientDetail(clientId) { /* Omitted for brevity */ }export function renderQuotationDashboard() {
    renderHeaderActions('quotations');
    const quotations = DataManager.getQuotations();
    const html = `<div class="flex justify-between items-center mb-6"><h1 class="text-3xl font-bold">견적 관리</h1></div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${quotations.map(q => `<a href="#quotation/${q.quotationId}" class="card p-6 block hover:bg-gray-700/50"><h3>${q.provisionalContractName}</h3><p>${q.recipientName}</p><p>${formatCurrency(q.quotationAmount)}</p></a>`).join('')}
        </div>`;
    mainContent.innerHTML = html;
}export function renderQuotationDetail(quotationId) { /* Omitted for brevity */ }export function renderEmployeeDashboard() {
    renderHeaderActions('employees');
    const employees = DataManager.getEmployees();
    const html = `
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-3xl font-bold tracking-tight text-white">직원 관리</h1>
        </div>
        <div class="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700">
            <table class="min-w-full divide-y divide-gray-700">
                <thead class="bg-gray-800"><tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">성명</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">최종학력</th>
                    <th class="relative px-6 py-3"></th>
                </tr></thead>
                <tbody class="bg-gray-900 divide-y divide-gray-700">
                ${employees.map(e => `
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">${e.employeeName}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">${e.finalEducation}</td>
                        <td class="px-6 py-4 text-right"><a href="#employee/${e.employeeId}" class="text-blue-400 hover:text-blue-300">상세보기</a></td>
                    </tr>`).join('') || `<tr><td colspan="3" class="text-center py-8 text-gray-400">등록된 직원이 없습니다.</td></tr>`}
                </tbody>
            </table>
        </div>`;
    mainContent.innerHTML = html;
}export function renderEmployeeDetail(employeeId) {
    const employee = DataManager.getEmployeeById(employeeId);
    if (!employee) { window.location.hash = '#employees'; return; }
    renderHeaderActions('employee-detail', { employeeId });
    const html = `
        <div class="fade-in space-y-8">
            <form id="employee-form" data-id="${employeeId}" class="card p-8 space-y-6">
                <h2 class="text-2xl font-bold">기본 정보</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div><label class="block text-sm">성명</label><input type="text" name="employeeName" value="${employee.employeeName}" class="form-input mt-1 w-full"></div>
                    <div><label class="block text-sm">주민등록번호</label><input type="text" name="residentRegistrationNumber" value="${employee.residentRegistrationNumber}" class="form-input mt-1 w-full" placeholder="암호화 저장 필요"></div>
                    <div class="md:col-span-2"><label class="block text-sm">최종학력</label><input type="text" name="finalEducation" value="${employee.finalEducation}" class="form-input mt-1 w-full"></div>
                </div>
            </form>
            <div id="qualifications-section" class="card p-8"></div>
            <div id="trainings-section" class="card p-8"></div>
        </div>`;
    mainContent.innerHTML = html;
    renderQualifications(employeeId);
    renderTrainings(employeeId);
    document.getElementById('employee-form').addEventListener('input', debounce(e => {
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        DataManager.saveEmployee({ ...data, employeeId });
    }, 1000));
}function renderQualifications(employeeId) {
    const qualifications = DataManager.getQualificationsByEmployeeId(employeeId);
    const container = document.getElementById('qualifications-section');
    container.innerHTML = `
        <h2 class="text-2xl font-bold mb-4">자격 사항</h2>
        <ul class="space-y-3 mb-6">${qualifications.map(q => `
            <li class="flex justify-between items-center bg-gray-800 p-3 rounded-md">
                <span>${q.qualificationName} (${q.acqui
