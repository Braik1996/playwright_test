//const{test,expect}=require('@playwright/test');

import * as testData from './Data.json';  /* lire le fichier Data*/
import{test,expect} from '@playwright/test';

test('campus france automation',async ({page})=>{
  await page.goto('https://www.campusfrance.org/fr'); /*aller sur l'URL*/
  await page.click('#tarteaucitronPersonalize2'); /*cliquer sur un élement ou boutoun*/
  await page.click('#block-campusconnexionoumoncompte > div.bouton.connexion');
  /*await page.fill('#edit-name','braikchs@gmail.com');*/
  await page.click('//*[@id="block-campusconnexionoumoncompte"]/div[2]/a[1]');
  

  /*await page.evaluate(() => {
    window.scrollBy(0, 400); // Scroll down by 400 pixels
    });*/

  await page.fill('#edit-name.username.form-text.required',testData[1].email);/*saiser un champs*/
  await page.fill('#edit-pass-pass1',testData[1].password);
  await page.fill('#edit-pass-pass2',testData[1].Cpassword);
  await page.click('#edit-field-civilite > div:nth-child(2) > label');
  await page.fill('#edit-field-nom-0-value',testData[1].lastName);
  await page.fill('id=edit-field-prenom-0-value',testData[1].firstName);
  await page.click('//*[@id=\"edit-field-pays-concernes-wrapper\"]/div/div/div[1]/div');
  const pays = testData[1].country; /*déclarer une variable*/
  await page.click(`//*[@id="edit-field-pays-concernes-wrapper"]/div/div/div[2]/div/div[text()='${pays}']`);
  await page.fill('#edit-field-nationalite-0-target-id',testData[1].paysDenaissance);
  await page.fill('id=edit-field-code-postal-0-value',testData[1].postalCode);
  await page.fill('id=edit-field-ville-0-value',testData[1].city);
  await page.fill('id=edit-field-telephone-0-value',testData[1].phoneNumber);
  await page.click('#edit-field-publics-cibles > div:nth-child(1) > label');
  await page.click('#edit-field-domaine-etudes-wrapper > div > div > div.selectize-input.items.full.has-options.has-items');
  const domaineEtude = testData[1].domaine;
  await page.click(`//*[@id="edit-field-domaine-etudes-wrapper"]/div/div/div[2]/div/div[text()='${domaineEtude}']`);
  await page.click('//*[@id="edit-field-niveaux-etude-wrapper"]/div/div/div[1]');
  const NiveauEtude = testData[1].NiveauE;
  await page.click(`//*[@id="edit-field-niveaux-etude-wrapper"]/div/div/div[2]/div/div[text()='${NiveauEtude}']`);
  await page.click('#edit-field-accepte-communications-wrapper > div > label');
  const successMessage = await page.textContent('//*[@id="edit-field-domaine-etudes-wrapper"]/div/label'); /*vérifier un message*/
  expect(successMessage).toBe("Domaine d'études");
  console.log('le texte est:', successMessage); 

 
  

 
  




  //await page.close();
})