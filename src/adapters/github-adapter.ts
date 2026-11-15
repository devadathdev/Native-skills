import type { IHostAdapter, HostAdapterMetadata } from './host-adapter.js';

export interface GitHubRepoInfo {
  owner: string;
  repo: string;
  defaultBranch: string;
  isPrivate: boolean;
}

export interface GitHubPullRequest {
  number: number;
  title: string;
  state: 'open' | 'closed' | 'merged';
  head: string;
  base: string;
  author: string;
}

export interface GitHubIssue {
  number: number;
  title: string;
  state: 'open' | 'closed';
  labels: string[];
}

export class GitHubAdapter implements IHostAdapter {
  readonly name = 'github';
  private connected = true;

  constructor(private readonly config: { token?: string; defaultOwner?: string; defaultRepo?: string } = {}) {}

  isAvailable(): boolean {
    return this.connected;
  }

  getMetadata(): HostAdapterMetadata {
    return {
      name: this.name,
      version: '1.0.0',
      description: 'GitHub repository, pull request, issue, and commit workflow adapter',
      connected: this.connected
    };
  }

  async getRepository(owner = this.config.defaultOwner || 'aura', repo = this.config.defaultRepo || 'native-skills'): Promise<GitHubRepoInfo> {
    return {
      owner,
      repo,
      defaultBranch: 'main',
      isPrivate: false
    };
  }

  async listPullRequests(owner?: string, repo?: string): Promise<GitHubPullRequest[]> {
    return [
      {
        number: 42,
        title: 'Upgrade runtime to V1.0',
        state: 'open',
        head: 'feature/v1-runtime',
        base: 'main',
        author: 'aura-bot'
      }
    ];
  }

  async createIssue(title: string, body?: string): Promise<GitHubIssue> {
    return {
      number: Math.floor(Math.random() * 1000) + 1,
      title,
      state: 'open',
      labels: ['aura', 'native-skill']
    };
  }

  disconnect(): void {
    this.connected = false;
  }
}
