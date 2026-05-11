package com.automationexercise.tests;

import org.testng.annotations.Test;

import com.automationexercise.base.BaseTest;
import com.automationexercise.pages.HomePage;
import com.automationexercise.pages.ProductPage;

public class ProductSearchTest extends BaseTest {

    @Test
    public void searchProductTest() {

        HomePage homePage = new HomePage(driver);

        ProductPage productPage = new ProductPage(driver);

        homePage.clickProducts();

        productPage.searchProduct("Blue Top");
    }
}