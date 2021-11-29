# Contract security measures

## SWC-103 (Floating pragma)

Specific compiler pragma `0.8.10` used in contract to avoid accidental bug inclusion through outdated compiler versions.

## SWC-107 

Imported `ReentrancyGuard` contract into `Allowance` contract to prevent a re-entrancy attack.

## Proper Use of Require

All `require` statements in contract validate and verify intended use case.
