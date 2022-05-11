using Microsoft.AspNetCore.Components;

namespace BlazorApp.Client.Pages.Components
{
    public partial class Accordion
    {
        [Parameter]
        public RenderFragment? ChildContent { get; set; }
        [Parameter]
        public string? IdComponent { get; set; }
    }
}
