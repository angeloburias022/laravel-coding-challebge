# Use PHP 8.0 base image
FROM php:8.0-fpm

# Set working directory
WORKDIR /var/www/html

# Install dependencies
RUN apt-get update && apt-get install -y \
    libzip-dev \
    zip

# Configure and install PHP extensions
RUN docker-php-ext-configure zip \
    && docker-php-ext-install zip pdo_mysql

# Copy application files into the container
COPY . .

# Expose port 8000 (optional, depending on your setup)
EXPOSE 8000

# Use PHP-FPM as the command to run when the container starts
CMD ["php-fpm"]
