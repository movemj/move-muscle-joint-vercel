#!/bin/bash

echo "=========================================="
echo "STEP 1: TypeScript Type Checking"
echo "=========================================="
cd /vercel/share/v0-project
pnpm tsc --noEmit
TSC_EXIT_CODE=$?
echo ""
echo "TypeScript exit code: $TSC_EXIT_CODE"
echo ""

echo "=========================================="
echo "STEP 2: Production Build"
echo "=========================================="
pnpm run build
BUILD_EXIT_CODE=$?
echo ""
echo "Build exit code: $BUILD_EXIT_CODE"
echo ""

echo "=========================================="
echo "FINAL RESULTS"
echo "=========================================="
if [ $TSC_EXIT_CODE -eq 0 ]; then
  echo "✓ TypeScript check: PASSED (exit code 0)"
else
  echo "✗ TypeScript check: FAILED (exit code $TSC_EXIT_CODE)"
fi

if [ $BUILD_EXIT_CODE -eq 0 ]; then
  echo "✓ Production build: PASSED (exit code 0)"
else
  echo "✗ Production build: FAILED (exit code $BUILD_EXIT_CODE)"
fi

echo "=========================================="

exit $(($TSC_EXIT_CODE + $BUILD_EXIT_CODE))
