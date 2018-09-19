import { newE2EPage } from '@stencil/core/testing';

it('action-sheet: basic, default', async () => {
  const page = await newE2EPage({
    url: `/src/components/action-sheet/test/basic?ionic:animate=false`
  });

  let compare = await page.compareScreenshot(`action-sheet: basic, default`);
  expect(compare).toMatchScreenshot();

  const presentBtn = await page.find('#basic');
  await presentBtn.click();

  let actionSheet = await page.find('ion-action-sheet');
  await actionSheet.waitForVisible();

  compare = await page.compareScreenshot(`action-sheet: basic, default, presented`);
  expect(compare).toMatchScreenshot();

  const backdrop = await page.find('ion-backdrop');
  await backdrop.click();

  await actionSheet.waitForNotVisible();

  compare = await page.compareScreenshot(`action-sheet: basic, default, dismissed`);
  expect(compare).toMatchScreenshot();

  actionSheet = await page.find('ion-action-sheet');
  expect(actionSheet).toBe(null);
});
