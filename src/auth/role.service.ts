import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private roles: string[] = [];

  constructor() { }

  getRoles(): string[] {
     return this.roles;
  }

  setRoles(roles: string[]): void {
    this.roles = roles;
  }

  hasRole(role: string): boolean {
    return this.roles.includes(role);
  }
}
