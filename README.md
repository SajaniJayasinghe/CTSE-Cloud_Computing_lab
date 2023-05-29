# CTSE-Cloud_Computing_lab


1. open vs code and go to setting symbol and add docker
2. Setting > command palette > Add docker compose file > Node js > Add port address (8080)
3. add docker file 
    FROM node:lts-alpine
    WORKDIR /usr/src/app
    COPY package*.json ./
    RUN npm install
    COPY . .
    EXPOSE 8080
    CMD ["npm", "start"]

4. open terminal > Go to the folder path 
5. After configure Dockerfile, run this command to build docker container “docker build -t <container_name>:<tag> . ”

              Ex:-  docker build -t ctse-web:v1 .

6. Now  we have to run and check container is working or not
          Run this command to run docker container “docker run -p 5010:5010 <container_name>:<tag>”
          Ex:- docker run -p 8080:8080 ctse-web:v1

7. Now type docker ps and check it is running or not
    EX:- docker ps
  
8. Now login to azure account.  
      az login
         Ex:- az login

9. create a resource group 
       
    az group create --name <group_name> --location eastus
           Ex:-  az group create --name ctsegroup --location eastus

10. Azure registry create 
        
    az acr create --resource-group <group_name> --name <registry_name> --sku Basic --admin-enabled true
        Ex:-  az acr create --resource-group ctsegroup --name ctseregistery --sku Basic --admin-enabled true

11. Get container registries list
        
    az acr list --resource-group <group_name> --query "[].{acrLoginServer:loginServer}" --output table
         Ex:- az acr list --resource-group ctsegroup --query “[].{acrLoginServer:loginServer}" --output table

12. Type Docker images 

13. Duplicate repository with registry name
       
    docker tag <repo_name>:<tag> <registry_login_link>/<repo_name>:<tag>
         Ex:- docker tag ctse-web:v1 ctseregistery.azurecr.io/ctse-web:v1

14. Login to Azure registry 
       
      docker login <login_link>
          Ex:- docker login ctseregistery.azurecr.io

15. Enter your username and password
16. Push docker file to registry
         
    docker push <duplicated_image_name>:<tag>
          Ex:- docker push ctseregistery.azurecr.io/ctse-web:v1

17. After host
18. Test Postman 


