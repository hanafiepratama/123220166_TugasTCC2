FROM node:20-alpine
WORKDIR /app
COPY . .  # Menyalin semua file dari direktori saat ini ke dalam /app
RUN npm install
EXPOSE 5000
CMD ["node", "index.js"]  # Memperbaiki tanda kurung
