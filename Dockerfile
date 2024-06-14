FROM quay.io/taira_makino/taira_tech:latest
RUN git clone https://github.com/Anonphoenix007/MAKINO-MD /root/MAKINO-MD
WORKDIR /root/MAKINO-MD/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
