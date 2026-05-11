package com.automationexercise.pages;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.automationexercise.base.BasePage;

public class ProductPage extends BasePage {

    WebDriver driver;

    public ProductPage(WebDriver driver) {

        super(driver);

        this.driver = driver;
    }

    By searchBox = By.id("search_product");

    By searchButton = By.id("submit_search");

    By firstProduct = By.xpath("(//div[@class='product-image-wrapper'])[1]");

    By addToCartButton = By.xpath("(//a[@data-product-id='1'])[1]");

    By viewCartButton = By.xpath("//u[text()='View Cart']");

    public void searchProduct(String productName) {

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

        wait.until(ExpectedConditions.visibilityOfElementLocated(searchBox));

        driver.findElement(searchBox).sendKeys(productName);

        driver.findElement(searchButton).click();
    }

    public void addFirstProductToCart() {

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

        WebElement product = wait.until(
                ExpectedConditions.visibilityOfElementLocated(firstProduct));

        Actions actions = new Actions(driver);

        actions.moveToElement(product).perform();

        WebElement addButton = wait.until(
                ExpectedConditions.visibilityOfElementLocated(addToCartButton));

        JavascriptExecutor js = (JavascriptExecutor) driver;

        js.executeScript("arguments[0].click();", addButton);

        wait.until(ExpectedConditions.visibilityOfElementLocated(viewCartButton));
    }

    public void goToCart() {

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

        WebElement cartButton = wait.until(
                ExpectedConditions.elementToBeClickable(viewCartButton));

        cartButton.click();
    }
}