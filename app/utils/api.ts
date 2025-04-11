interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  topics: string[];
}

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  const response = await fetch('https://api.github.com/users/ahyanarizky/repos?sort=updated&per_page=3');
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub repositories');
  }
  return response.json();
}

interface Experience {
  title: string;
  company: string;
  dateRange: string;
}

// Note: LinkedIn API requires authentication, so this is a placeholder
// You'll need to implement proper LinkedIn API integration
export const experienceData: Experience[] = [
  {
    title: 'Software Developer',
    company: 'MoWorks',
    dateRange: '2023 - Present'
  },
  // Add more experience entries as needed
]; 
