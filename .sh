#!/bin/bash

# Function to handle commit and push
function commit_and_push {
    echo "Enter your commit message:"
    read -r message
    if [ -n "$message" ]; then
        git commit -m "$message"
        git push origin main
    else
        echo "Empty commit message. Exiting."
    fi
}

# Function to generate a model
function generate_model {
    echo "Enter model name:"
    read -r model_name
    if [ -n "$model_name" ]; then
        php artisan make:model "$model_name"
    else
        echo "Model name cannot be empty. Exiting."
    fi
}

# Function to create a migration
function create_migration {
    echo "Enter migration name:"
    read -r migration_name
    if [ -n "$migration_name" ]; then
        php artisan make:migration "$migration_name"
    else
        echo "Migration name cannot be empty. Exiting."
    fi
}

# Function to run migrations
function run_migrations {
    php artisan migrate
}

# Function to create a test
function create_test {
    echo "Enter test name:"
    read -r test_name
    if [ -n "$test_name" ]; then
        php artisan make:test "$test_name"
    else
        echo "Test name cannot be empty. Exiting."
    fi
}

# Function to run tests
function run_tests {
    php artisan test
}

# Function to run application
function run_application {
    php artisan serve
}

# Function to build and start Docker containers
function docker_up {
    docker-compose up --build
}

# Display user type selection
echo "Select your user type:"
echo "1. Developer"
echo "2. DevOps"
echo "3. Exit"

read -r user_type

case $user_type in
    1) echo "Developer Menu:"
       echo "Select an option:"
       echo "1. Commit and Push"
       echo "2. Generate Model"
       echo "3. Create Migration"
       echo "4. Run Migrations"
       echo "5. Create Test"
       echo "6. Run Tests"
       echo "7. Run Application"
       echo "8. Exit"
       read -r option
       case $option in
           1) commit_and_push ;;
           2) generate_model ;;
           3) create_migration ;;
           4) run_migrations ;;
           5) create_test ;;
           6) run_tests ;;
           7) run_application ;;
           8) echo "Exiting." ;;
           *) echo "Invalid option. Exiting." ;;
       esac
       ;;
    2) echo "DevOps Menu:"
       echo "Select an option:"
       echo "1. Build and Start Docker Containers"
       echo "2. Exit"
       read -r option
       case $option in
           1) docker_up ;;
           2) echo "Exiting." ;;
           *) echo "Invalid option. Exiting." ;;
       esac
       ;;
    3) echo "Exiting." ;;
    *) echo "Invalid option. Exiting." ;;
esac

exit 0
