using Microsoft.AspNetCore.Components;

namespace BlazorApp.Client.Pages.Components
{
    public partial class Card
    {
        [Parameter]
        public RenderFragment? ChildContent { get; set; }

        [Parameter]
        public string? Title { get; set; }
    }
}
