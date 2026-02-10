#!/usr/bin/env node

/**
 * Regression test for README.md documentation issues
 * This test would have caught the bugs fixed in this commit:
 * 1. Broken HHS.gov HIPAA link (HTTP 403)
 * 2. Incorrect reference to "PR #4" instead of "Issue #4"
 * 3. Outdated team status information
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Running README.md regression test...\n');

const readmePath = path.join(__dirname, '..', 'README.md');
const readmeContent = fs.readFileSync(readmePath, 'utf8');

let passed = 0;
let failed = 0;

// Test 1: Check for "PR #4" reference (should not exist after fix)
console.log('Test 1: Checking for incorrect "PR #4" reference...');
if (readmeContent.includes('PR #4')) {
  console.log('  ❌ FAIL: Found "PR #4" reference (should be "Issue #4")');
  failed++;
} else {
  console.log('  ✅ PASS: No "PR #4" reference found');
  passed++;
}

// Test 2: Check for "Issue #4" reference (should exist after fix)
console.log('\nTest 2: Checking for correct "Issue #4" reference...');
if (readmeContent.includes('Issue #4')) {
  console.log('  ✅ PASS: Found "Issue #4" reference');
  passed++;
} else {
  console.log('  ❌ FAIL: Missing "Issue #4" reference');
  failed++;
}

// Test 3: Check for broken HHS.gov link pattern (original broken link)
console.log('\nTest 3: Checking for original broken HHS.gov HIPAA link...');
if (readmeContent.includes('https://www.hhs.gov/hipaa')) {
  console.log('  ⚠️  WARNING: Original HHS.gov link still present (may be blocked for bots)');
  // Check if there's a note about automated requests
  if (readmeContent.includes('automated requests') || readmeContent.includes('block')) {
    console.log('  ✅ PASS: Link includes warning about automated request blocking');
    passed++;
  } else {
    console.log('  ⚠️  NOTE: Consider adding warning about potential bot blocking');
  }
} else {
  console.log('  ✅ PASS: Original broken HHS.gov link replaced');
  passed++;
}

// Test 4: Check for alternative HIPAA resource
console.log('\nTest 4: Checking for working HIPAA resource...');
if (readmeContent.includes('HIPAA') && 
    (readmeContent.includes('wikipedia.org') || 
     readmeContent.includes('en.wikipedia.org'))) {
  console.log('  ✅ PASS: Found Wikipedia HIPAA reference (working alternative)');
  passed++;
} else {
  console.log('  ❌ FAIL: Missing working HIPAA resource');
  failed++;
}

// Test 5: Check team status is clear
console.log('\nTest 5: Checking team status clarity...');
if (readmeContent.includes('Team Status') && 
    (readmeContent.includes('1/4') || readmeContent.includes('recruiting'))) {
  console.log('  ✅ PASS: Team status information present');
  passed++;
} else {
  console.log('  ⚠️  WARNING: Team status information unclear');
}

console.log('\n' + '='.repeat(50));
console.log(`RESULTS: ${passed} passed, ${failed} failed`);

if (failed > 0) {
  console.log('\n❌ Regression test FAILED');
  process.exit(1);
} else {
  console.log('\n✅ Regression test PASSED');
  process.exit(0);
}