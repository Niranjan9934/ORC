const SIDEBAR_API =
  "https://orc.outrightcrm.com/index.php?entryPoint=flexibility&global_component_name=Sidebar";

export async function fetchSidebar() {
  const response = await fetch(SIDEBAR_API);

  if (!response.ok) {
    throw new Error(`Sidebar API failed: ${response.status}`);
  }

  return await response.json();
}
