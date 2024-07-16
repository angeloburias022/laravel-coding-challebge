use App\Models\Customer;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CustomerTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    public function test_can_create_customer()
    {
        $customerData = [
            'first_name' => 'Jane',
            'last_name' => 'Doe',
            'email' => 'jane.doe@example.com',
            'contact_number' => '1234567890',
        ];

        $response = $this->postJson('/api/customers', $customerData);

        $response->assertStatus(201);

        $this->assertDatabaseHas('customers', [
            'email' => 'jane.doe@example.com',
        ]);
    }

    public function test_can_fetch_all_customers()
    {
        $customerData = [
            'first_name' => 'Jane',
            'last_name' => 'Doe',
            'email' => 'jane.doe@example.com',
            'contact_number' => '1234567890',
        ];
        Customer::create($customerData);

        $response = $this->get('/api/customers');

        $response->assertStatus(200);

        $response->assertJsonFragment([
            'email' => 'jane.doe@example.com',
        ]);
    }

    public function test_can_show_customer()
    {
        $customer = Customer::factory()->create();

        $response = $this->get('/api/customers/' . $customer->id);

        $response->assertStatus(200);

        $response->assertJson([
            'id' => $customer->id,
            'first_name' => $customer->first_name,
            'last_name' => $customer->last_name,
            'email' => $customer->email,
            'contact_number' => $customer->contact_number,
        ]);
    }

    public function test_can_update_customer()
    {
        $customer = Customer::factory()->create();

        $updatedData = [
            'first_name' => 'Updated First Name',
            'last_name' => 'Updated Last Name',
            'email' => 'updated.email@example.com',
            'contact_number' => '9876543210',
        ];

        $response = $this->putJson('/api/customers/' . $customer->id, $updatedData);

        $response->assertStatus(200);

        $this->assertDatabaseHas('customers', [
            'id' => $customer->id,
            'email' => 'updated.email@example.com',
        ]);
    }

    public function test_can_delete_customer()
    {
        $customer = Customer::factory()->create();

        $response = $this->delete('/api/customers/' . $customer->id);

        $response->assertStatus(204);

        $this->assertDatabaseMissing('customers', [
            'id' => $customer->id,
        ]);
    }
}
