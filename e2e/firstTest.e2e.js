describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('PasswordInputID'))).toBeVisible();
    await expect(element(by.id('LoginBtnID'))).toBeVisible();
  });

  it('login flow works correctly', async () => {
    await element(by.id('PasswordInputID')).typeText('123');
    await element(by.id('LoginBtnID')).tap();
    await expect(element(by.id('PokeListID'))).toBeVisible();
  });

  it('Get pokemon information flow works correctly', async () => {
    await element(by.id('PasswordInputID')).typeText('123');
    await element(by.id('LoginBtnID')).tap();
    await expect(element(by.id('PokeListID'))).toBeVisible();
    await element(by.id('ListItemID-1')).tap();
    await expect(element(by.id('PokemonNameID'))).toBeVisible();
  });
});
