const DB_KEY = 'legend_erp_data';const getInitialData = () => ({
    projects: {},
    contracts: {},
    revisions: {},
    clients: {},
    invoices: {},
    quotations: {},
    projectParticipants: {},
    employees: {},
    qualifications: {},
    trainings: {},
    individualPerformances: {},
    licenses: {},
    equipments: {},
    projectCounter: 1,
    clientCounter: 1,
    quotationCounter: 1,
    invoiceCounter: 1,
    participantCounter: 1,
    employeeCounter: 1,
    licenseCounter: 1,
    equipmentCounter: 1,
    qualificationCounter: 1,
    trainingCounter: 1,
    performanceCounter: 1,
});class DataManager {
    constructor() {
        this.data = this.load();
    }

    init() {
        if (Object.keys(this.data.projects).length === 0) {
            console.log("Initializing with sample data...");
            this.createSampleData();
        }
    }
    
    createSampleData() {
        const sampleClient = this.createNewClient();
        sampleClient.clientName = "한국수자원공사";
        sampleClient.businessRegistrationNumber = "123-45-67890";
        this.saveClient(sampleClient);

        const sampleProject = this.createNewProject();
        sampleProject.projectName = "수자원 관리 시스템 고도화";
        sampleProject.status = "진행중";
        sampleProject.clientId = sampleClient.clientId;
        this.saveProject(sampleProject);

        const sampleContract = this.saveContract({ projectId: sampleProject.projectId, contractType: '최초', startDate: '2025-02-01', endDate: '2025-12-31' });

        const sampleEmployee = this.createNewEmployee();
        sampleEmployee.employeeName = '김철수';
        sampleEmployee.finalEducation = '서울대학교 토목공학과 학사';
        this.saveEmployee(sampleEmployee);
        
        this.saveQualification({ employeeId: sampleEmployee.employeeId, qualificationName: '토목기사', acquisitionDate: '2018-03-15' });
        this.saveTraining({ employeeId: sampleEmployee.employeeId, trainingName: '건설기술인 최초교육', trainingDate: '2023-11-01', requiredCycle: '3년' });

        const sampleLicense = this.createNewLicense();
        sampleLicense.licenseName = '건설사업관리';
        sampleLicense.licenseNumber = '서울-01-1234';
        sampleLicense.renewalDate = new Date(new Date().setDate(new Date().getDate() + 80)).toISOString().split('T')[0]; // 80일 후 만료
        this.saveLicense(sampleLicense);

        this.saveEquipment({ licenseId: sampleLicense.licenseId, equipmentName: 'Leica TS16', nextCalibrationDate: new Date(new Date().setDate(new Date().getDate() + 25)).toISOString().split('T')[0] }); // 25일 후 검교정
    }

    load() { const data = localStorage.getItem(DB_KEY); return data ? JSON.parse(data) : getInitialData(); }
    save() { localStorage.setItem(DB_KEY, JSON.stringify(this.data)); }

    generateProjectId() { const year = new Date().getFullYear(); const nextId = this.data.projectCounter++; return `P${year}-${String(nextId).padStart(3, '0')}`; }
    createNewProject() { const newId = this.generateProjectId(); const newProject = { projectId: newId, projectName: '', projectCategory: 'PQ', pmName: '', projectLocation: '', summary: '', facilityType: '', status: '진행중', clientId: null, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }; this.data.projects[newId] = newProject; this.save(); return newProject; }
    getProjects(filter = {}) { let projects = Object.values(this.data.projects); if (filter.status && filter.status !== 'all') { projects = projects.filter(p => p.status === filter.status); } return projects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); }
    getProjectById(projectId) { return this.data.projects[projectId]; }
    saveProject(projectData) { if (!projectData.projectId || !this.data.projects[projectData.projectId]) return null; projectData.updatedAt = new Date().toISOString(); this.data.projects[projectData.projectId] = { ...this.data.projects[projectData.projectId], ...projectData }; this.save(); return this.data.projects[projectData.projectId]; }

    getContractsByProjectId(projectId) { return Object.values(this.data.contracts).filter(c => c.projectId === projectId); }
    getContractById(contractId) { return this.data.contracts[contractId]; }
    saveContract(contractData) { if (!contractData.contractId) { contractData.contractId = `C${contractData.projectId}-${Date.now()}`; } this.data.contracts[contractData.contractId] = { ...this.data.contracts[contractData.contractId], ...contractData }; this.save(); return this.data.contracts[contractData.contractId]; }

    getRevisionsByContractId(contractId) { return Object.values(this.data.revisions).filter(r => r.contractId === contractId).sort((a, b) => a.revisionNumber - b.revisionNumber); }
    saveContractRevision(revisionData) { if (!revisionData.revisionId) { revisionData.revisionId = `R${revisionData.contractId}-${Date.now()}`; } this.data.revisions[revisionData.revisionId] = { ...this.data.revisions[revisionData.revisionId], ...revisionData }; this.save(); return this.data.revisions[revisionData.revisionId]; }

    generateClientId() { const nextId = this.data.clientCounter++; return `CL${new Date().getFullYear()}-${String(nextId).padStart(3, '0')}`; }
    createNewClient() { const newId = this.generateClientId(); const newClient = { clientId: newId, clientName: '', businessRegistrationNumber: '', corporateRegistrationNumber: '', address: '', contactNumber: '', remarks: '', createdAt: new Date().toISOString() }; this.data.clients[newId] = newClient; this.save(); return newClient; }
    getClients() { return Object.values(this.data.clients).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); }
    getClientById(clientId) { return this.data.clients[clientId]; }
    saveClient(clientData) { if (!clientData.clientId || !this.data.clients[clientData.clientId]) return null; this.data.clients[clientData.clientId] = { ...this.data.clients[clientData.clientId], ...clientData }; this.save(); return this.data.clients[clientData.clientId]; }

    generateQuotationId() { const nextId = this.data.quotationCounter++; return `Q${new Date().getFullYear()}-${String(nextId).padStart(4, '0')}`; }
    createNewQuotation() { const newId = this.generateQuotationId(); const newQuotation = { quotationId: newId, quotationNumber: newId, quotationContent: '', provisionalContractName: '', quotationAmount: 0, recipientName: '', createdAt: new Date().toISOString() }; this.data.quotations[newId] = newQuotation; this.save(); return newQuotation; }
    getQuotations() { return Object.values(this.data.quotations).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); }
    getQuotationById(quotationId) { return this.data.quotations[quotationId]; }
    saveQuotation(quotationData) { if (!quotationData.quotationId || !this.data.quotations[quotationData.quotationId]) return null; this.data.quotations[quotationData.quotationId] = { ...this.data.quotations[quotationData.quotationId], ...quotationData }; this.save(); return this.data.quotations[quotationData.quotationId]; }

    generateInvoiceId() { return `INV-${this.data.invoiceCounter++}`; }
    saveInvoice(invoiceData) { if (!invoiceData.invoiceId) { invoiceData.invoiceId = this.generateInvoiceId(); } this.data.invoices[invoiceData.invoiceId] = { ...this.data.invoices[invoiceData.invoiceId], ...invoiceData }; this.save(); return this.data.invoices[invoiceData.invoiceId]; }
    getInvoicesByContractId(contractId) { return Object.values(this.data.invoices).filter(i => i.contractId === contractId); }
    deleteInvoice(invoiceId) { delete this.data.invoices[invoiceId]; this.save(); }

    generateParticipantId() { return `PART-${this.data.participantCounter++}`; }
    saveParticipant(participantData) { if (!participantData.participantId) { participantData.participantId = this.generateParticipantId(); } this.data.projectParticipants[participantData.participantId] = { ...this.data.projectParticipants[participantData.participantId], ...participantData }; this.save(); return this.data.projectParticipants[participantData.participantId]; }
    getParticipantsByProjectId(projectId) { return Object.values(this.data.projectParticipants).filter(p => p.projectId === projectId); }
    deleteParticipant(participantId) { delete this.data.projectParticipants[participantId]; this.save(); }
    

    
    generateEmployeeId() { return `E-${this.data.employeeCounter++}`; }
    createNewEmployee() { const id = this.generateEmployeeId(); const employee = { employeeId: id, employeeName: '', residentRegistrationNumber: '', finalEducation: '', koceaCareerDbId: '', remarks: '' }; this.data.employees[id] = employee; this.save(); return employee; }
    getEmployees() { return Object.values(this.data.employees); }
    getEmployeeById(id) { return this.data.employees[id]; }
    saveEmployee(data) { this.data.employees[data.employeeId] = { ...this.data.employees[data.employeeId], ...data }; this.save(); }

    generateQualificationId() { return `QUAL-${this.data.qualificationCounter++}`; }
    getQualificationsByEmployeeId(id) { return Object.values(this.data.qualifications).filter(q => q.employeeId === id); }
    saveQualification(data) { if (!data.qualificationId) data.qualificationId = this.generateQualificationId(); this.data.qualifications[data.qualificationId] = { ...this.data.qualifications[data.qualificationId], ...data }; this.save(); }
    deleteQualification(id) { delete this.data.qualifications[id]; this.save(); }

    generateTrainingId() { return `TRAIN-${this.data.trainingCounter++}`; }
    getTrainingsByEmployeeId(id) { return Object.values(this.data.trainings).filter(t => t.employeeId === id); }
    saveTraining(data) { if (!data.trainingId) data.trainingId = this.generateTrainingId(); this.data.trainings[data.trainingId] = { ...this.data.trainings[data.trainingId], ...data }; this.save(); }
    deleteTraining(id) { delete this.data.trainings[id]; this.save(); }
    

    getPerformancesByEmployeeId(id) { return Object.values(this.data.individualPerformances).filter(p => p.employeeId === id); }

    generateLicenseId() { return `L-${this.data.licenseCounter++}`; }
    createNewLicense() { const id = this.generateLicenseId(); const license = { licenseId: id, licenseName: '', licenseNumber: '', acquisitionDate: '', renewalDate: '' }; this.data.licenses[id] = license; this.save(); return license; }
    getLicenses() { return Object.values(this.data.licenses); }
    getLicenseById(id) { return this.data.licenses[id]; }
    saveLicense(data) { this.data.licenses[data.licenseId] = { ...this.data.licenses[data.licenseId], ...data }; this.save(); }

    generateEquipmentId() { return `EQ-${this.data.equipmentCounter++}`; }
    getEquipmentsByLicenseId(id) { return Object.values(this.data.equipments).filter(e => e.licenseId === id); }
    saveEquipment(data) { if (!data.equipmentId) data.equipmentId = this.generateEquipmentId(); this.data.equipments[data.equipmentId] = { ...this.data.equipments[data.equipmentId], ...data }; this.save(); }
    deleteEquipment(id) { delete this.data.equipments[id]; this.save(); }
    
    getNotifications() {
        const notifications = [];
        const today = new Date();
        const ninetyDaysFromNow = new Date();
        ninetyDaysFromNow.setDate(today.getDate() + 90);

        Object.values(this.data.licenses).forEach(license => {
            if (license.renewalDate) {
                const renewalDate = new Date(license.renewalDate);
                if (renewalDate <= ninetyDaysFromNow) {
                    notifications.push({ type: 'license', message: `${license.licenseName} 면허가 ${license.renewalDate}에 만료될 예정입니다.`, link: `#license/${license.licenseId}` });
                }
            }
        });

        Object.values(this.data.equipments).forEach(equipment => {
            if (equipment.nextCalibrationDate) {
                const calibrationDate = new Date(equipment.nextCalibrationDate);
                if (calibrationDate <= ninetyDaysFromNow) {
                    const license = this.getLicenses().find(l => this.getEquipmentsByLicenseId(l.licenseId).some(e => e.equipmentId === equipment.equipmentId));
                    notifications.push({ type: 'equipment', message: `${equipment.equipmentName} 장비의 검교정이 ${equipment.nextCalibrationDate}에 예정되어 있습니다.`, link: `#license/${license?.licenseId}` });
                }
            }
        });

        return notifications;
    }

    saveUnsavedChanges(key, data) { localStorage.setItem(`unsaved_${key}`, JSON.stringify(data)); }
    loadUnsavedChanges(key) { const data = localStorage.getItem(`unsaved_${key}`); return data ? JSON.parse(data) : null; }
    clearUnsavedChanges(key) { localStorage.removeItem(`unsaved_${key}`); }
}export default new DataManager();
