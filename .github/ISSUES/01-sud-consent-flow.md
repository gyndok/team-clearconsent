# [HIPAA]: SUD Consent Flow Implementation

**Priority**: High  
**Labels**: hipaa-2026, frontend, backend

## Description
Create separate consent flows for Substance Use Disorder (SUD) records as required by HIPAA 2026. SUD records have enhanced privacy requirements and special handling rules.

## HIPAA 2026 Requirement
42 CFR Part 2 compliance for substance use disorder records. Requires separate consent, enhanced privacy controls, and special authorization.

## Implementation Details

### Frontend Changes
- [ ] Create SUD-specific consent form UI
- [ ] Add SUD privacy notice components
- [ ] Implement SUD authorization workflow
- [ ] Add SUD record flagging in patient dashboard

### Backend Changes
- [ ] Create SUD consent database schema
- [ ] Implement SUD-specific authorization logic
- [ ] Add SUD record access controls
- [ ] Create SUD audit logging

### Database Changes
- [ ] Add `is_sud_record` flag to consent table
- [ ] Create `sud_authorizations` table
- [ ] Add `sud_access_logs` table
- [ ] Update patient consent history views

### Acceptance Criteria
- [ ] SUD consent forms clearly differentiated from regular consent
- [ ] Enhanced privacy notices displayed for SUD records
- [ ] Special authorization workflow functional
- [ ] SUD records properly flagged and tracked
- [ ] Audit logs capture all SUD-related activities

## Estimated Effort: L

## Dependencies
- Existing consent form system
- Patient management system

## Testing Requirements
- [ ] Unit tests for SUD authorization logic
- [ ] Integration tests for SUD workflow
- [ ] HIPAA compliance validation
- [ ] Security audit for SUD data handling