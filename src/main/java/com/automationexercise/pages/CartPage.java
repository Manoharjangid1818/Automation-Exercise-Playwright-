package com.automationexercise.pages;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.automationexercise.base.BasePage;

public class CartPage extends BasePage {

    WebDriver driver;

    public CartPage(WebDriver driver) {

        super(driver);

        this.driver = driver;
    }

    By quantity = By.className("disabled");

    By deleteButton = By.className("cart_quantity_delete");

    By emptyCartMessage = By.id("empty_cart");

    public String getProductQuantity() {

        return driver.findElement(quantity).getText();
    }

    public void removeProduct() {

        driver.findElement(deleteButton).click();
    }

    public boolean isCartEmpty() {

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

        wait.until(ExpectedConditions.visibilityOfElementLocated(emptyCartMessage));

        return driver.findElement(emptyCartMessage).isDisplayed();
    }
}