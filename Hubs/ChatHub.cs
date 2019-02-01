using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace AngularDemo.Hubs
{
    public class ChatHub : Hub
    {
        public void Echo(string message) {
            Clients.All.SendAsync("Send", message);
        }
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}