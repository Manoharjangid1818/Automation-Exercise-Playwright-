package com.automationexercise.tests;

import com.automationexercise.base.BaseTest;
import com.automationexercise.pages.CartPage;
import com.automationexercise.pages.HomePage;
import com.automationexercise.pages.ProductPage;
import org.testng.Assert;
import org.testng.annotations.Test;

public class CartTest extends BaseTest {

    @Test
    public void addAndRemoveProductTest() {

        HomePage homePage = new HomePage(driver);

        ProductPage productPage = new ProductPage(driver);

        CartPage cartPage = new CartPage(driver);

        homePage.clickProducts();

        productPage.addFirstProductToCart();

        productPage.goToCart();

        String quantity = cartPage.getProductQuantity();

        Assert.assertEquals(quantity, "1");

        cartPage.removeProduct();

        Assert.assertTrue(cartPage.isCartEmpty());
    }
}