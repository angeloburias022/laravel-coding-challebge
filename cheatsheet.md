# Laravel Cheat Sheet

## Commands

### Artisan Commands
- `php artisan migrate`: Run all outstanding migrations
- `php artisan migrate:fresh`: Drop all tables and re-run all migrations
- `php artisan migrate:rollback`: Rollback the last database migration
- `php artisan migrate:refresh`: Rollback and re-run all migrations
- `php artisan make:model ModelName -m`: Create a model with migration
- `php artisan make:controller ControllerName`: Create a new controller
- `php artisan make:middleware MiddlewareName`: Create a middleware
- `php artisan make:seeder SeederName`: Create a new database seeder
- `php artisan db:seed --class=SeederName`: Seed the database with specific seeder
- `php artisan route:list`: List all registered routes
- `php artisan cache:clear`: Clear the application cache

### Serve and Test
- `php artisan serve`: Start the development server
- `php artisan test`: Run all tests in the application

## Database

### Eloquent ORM
- Define Relationships:
  ```php
  class User extends Model {
      public function posts() {
          return $this->hasMany(Post::class);
      }
  }



## compose
- `composer clear-cache` : clear Composer's cache


