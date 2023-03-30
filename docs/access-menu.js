// This usage loads the file that contains the AccessibleMenu class.
// You can also import the class directly.
import AccessibleMenu from "./class-access-menu.js";
(() => {
    const initAccessibleMenus = (data_selector = "data-acc-menu") => {
        const accessMenus = document.querySelectorAll("[" + data_selector + "]");
        accessMenus.forEach((menu) => {
            new AccessibleMenu(menu);
        });
    };
    try {
        initAccessibleMenus();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        console.error(error);
    }
})();
