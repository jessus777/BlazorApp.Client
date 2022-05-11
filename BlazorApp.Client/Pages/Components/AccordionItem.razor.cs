using Microsoft.AspNetCore.Components;

namespace BlazorApp.Client.Pages.Components
{
    public partial class AccordionItem
    {
        [Parameter]
        public RenderFragment? ChildContent { get; set; }
        [Parameter]
        public string? Title { get; set; }
        [Parameter]
        public string? ExpandeArea { get; set; } = "false";
        [Parameter]
        public string? IdCollapse { get; set; }
        [Parameter]
        public string? IdAccordionParent { get; set; }
        [Parameter]
        public string? ShowCollapse { get; set; } = "";
        [Parameter]
        public string? IdHeaderAccordion { get; set; }
        [Parameter]
        public string? ActiveCollapsed { get; set; }
    }
}
