using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
namespace BlazorApp.Client.Pages.Customer.Create
{
    public partial class Create
    {
        [Inject]
        protected IJSRuntime? JSRuntime { get; set; }
        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            if (firstRender)
            {
                await JSRuntime.InvokeVoidAsync("asyncSelectState");
                await JSRuntime.InvokeVoidAsync("asyncSelectCity");
            }
        }

    }
}
