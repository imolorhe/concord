#!/usr/bin/env bash

if [ -f "build/index.html" ]; then
   mv build/index.html build/_index.html
fi