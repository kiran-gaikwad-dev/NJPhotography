@echo off
call npx --yes create-vite@latest . --template react-ts
call npm install
call npm install -D tailwindcss postcss autoprefixer
call npx tailwindcss init -p
call npm install framer-motion lucide-react react-router-dom@6
echo Done
