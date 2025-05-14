use Illuminate\Support\Facades\Mail;
use App\Mail\UserMessage;
use Illuminate\Http\Request;

Route::post('/send-email', function (Request $request) {
    $data = $request->validate([
        'to' => 'required|email',
        'subject' => 'required|string',
        'body' => 'required|string',
    ]);

    Mail::to($data['to'])->send(new UserMessage($data));

    return response()->json(['message' => 'Email sent successfully!']);
});
