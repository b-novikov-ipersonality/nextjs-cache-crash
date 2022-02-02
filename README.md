## Steps to reproduce

1. `docker build -t nextjs-docker .`
2. `docker run -p 3000:3000 nextjs-docker`
3. Visit http://localhost:3000
4. Open dev tools to disable cache
5. Refresh for 5 seconds
