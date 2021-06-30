async (page) => {
    await page.goto();
    await page.waitForTimeout(3000);
    await page.scrollToElement('footer');
    await page.waitForTimeout(3000);
    await page.goto('/movie/508943');
    await page.waitForTimeout(3000);
};
