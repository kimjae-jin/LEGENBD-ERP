import DataManager from './data_manager.js';import { 
    renderDashboard, 
    renderProjectDetail, 
    renderHeaderActions,
    renderClientDashboard,
    renderClientDetail,
    renderQuotationDashboard,
    renderQuotationDetail,
    renderEmployeeDashboard,
    renderEmployeeDetail,
    renderLicenseDashboard,
    renderLicenseDetail,
    renderNotifications
} from './ui_components.js';const mainContent = document.getElementById('main-content');const headerActions = document.getElementById('header-actions');function updateActiveNav() {
    const currentHash = window.location.hash || '#';
    document.querySelectorAll('#sidebar nav a.nav-link').forEach(link => {
        const linkHref = link.getAttribute('href');
        link.classList.remove('active');
        
        if (linkHref === '#' && (currentHash === '#' || currentHash.startsWith('#project/'))) {
            link.classList.add('active');
        } else if (linkHref !== '#' && currentHash.startsWith(linkHref)) {
            link.classList.add('active');
        }
    });
}function router() {
    const hash = window.location.hash;
    mainContent.innerHTML = '';
    headerActions.innerHTML = '';

    if (hash.startsWith('#project/')) {
        const projectId = hash.substring(9);
        renderProjectDetail(projectId);
    } else if (hash.startsWith('#client/')) {
        const clientId = hash.substring(8);
        renderClientDetail(clientId);
    } else if (hash.startsWith('#clients')) {
        renderClientDashboard();
    } else if (hash.startsWith('#quotation/')) {
        const quotationId = hash.substring(11);
        renderQuotationDetail(quotationId);
    } else if (hash.startsWith('#quotations')) {
        renderQuotationDashboard();
    } else if (hash.startsWith('#employee/')) {
        const employeeId = hash.substring(10);
        renderEmployeeDetail(employeeId);
    } else if (hash.startsWith('#employees')) {
        renderEmployeeDashboard();
    } else if (hash.startsWith('#license/')) {
        const licenseId = hash.substring(9);
        renderLicenseDetail(licenseId);
    } else if (hash.startsWith('#licenses')) {
        renderLicenseDashboard();
    } else {
        renderDashboard();
    }
    updateActiveNav();
    renderNotifications();
}function initApp() {
    DataManager.init();
    lucide.createIcons();
    
    window.addEventListener('hashchange', router);
    router();
    
    document.body.addEventListener('click', e => {
        const newProjectBtn = e.target.closest('[data-action="new-project"]');
        if (newProjectBtn) {
            const newProject = DataManager.createNewProject();
            window.location.hash = `#project/${newProject.projectId}`;
        }
        
        const newClientBtn = e.target.closest('[data-action="new-client"]');
        if (newClientBtn) {
            const newClient = DataManager.createNewClient();
            window.location.hash = `#client/${newClient.clientId}`;
        }

        const newQuotationBtn = e.target.closest('[data-action="new-quotation"]');
        if (newQuotationBtn) {
            const newQuotation = DataManager.createNewQuotation();
            window.location.hash = `#quotation/${newQuotation.quotationId}`;
        }

        const newEmployeeBtn = e.target.closest('[data-action="new-employee"]');
        if (newEmployeeBtn) {
            const newEmployee = DataManager.createNewEmployee();
            window.location.hash = `#employee/${newEmployee.employeeId}`;
        }

        const newLicenseBtn = e.target.closest('[data-action="new-license"]');
        if (newLicenseBtn) {
            const newLicense = DataManager.createNewLicense();
            window.location.hash = `#license/${newLicense.licenseId}`;
        }
    });
}document.addEventListener('DOMContentLoaded', initApp);
