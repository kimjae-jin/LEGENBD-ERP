/**
 * @fileoverview Service for interacting with the backend automation module.
 */

// --- Type Definitions (mirroring backend DTO) ---
// These types should be kept in sync with `legend-erp-backend/src/automation/dto/weekly-report.dto.ts`

interface ReportNote {
  remarks: string;
  updatedAt: string; // Dates are typically serialized as strings in JSON
}

interface ProjectNote extends ReportNote {
  projectId: string;
  projectName: string;
}

interface ContractNote extends ReportNote {
  contractId: string;
  projectName: string;
}

export interface WeeklyReport {
  generatedAt: string;
  reportPeriod: {
    from: string;
    to: string;
  };
  projectNotes: ProjectNote[];
  contractNotes: ContractNotes[];
}


class AutomationApiService {
  private readonly baseUrl: string;

  constructor() {
    // In a real app, this would come from environment variables
    this.baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';
  }

  /**
   * Fetches the weekly report data from the backend.
   * The backend endpoint is `/automation/weekly-report`.
   * @returns {Promise<WeeklyReport>} The weekly report data.
   */
  public async generateWeeklyReport(): Promise<WeeklyReport> {
    console.log('Fetching weekly report from the backend...');
    try {
      const response = await fetch(`${this.baseUrl}/automation/weekly-report`);

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`API Error: ${response.status} ${response.statusText} - ${errorData}`);
      }

      const data: WeeklyReport = await response.json();
      console.log('Successfully fetched weekly report.');
      return data;
    } catch (error) {
      console.error('Failed to fetch weekly report:', error);
      // Re-throw the error to be handled by the calling component
      throw error;
    }
  }
}

// Export a singleton instance of the service
export const automationService = new AutomationApiService();
