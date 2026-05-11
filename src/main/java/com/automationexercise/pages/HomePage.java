package com.automationexercise.pages;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.automationexercise.base.BasePage;

public class HomePage extends BasePage {

    WebDriver driver;

    public HomePage(WebDriver driver) {

        super(driver);

        this.driver = driver;
    }

    By productsButton = By.xpath("//a[@href='/products']");

    public void clickProducts() {

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

        wait.until(ExpectedConditions.elementToBeClickable(productsButton));

        driver.findElement(productsButton).click();
    }
}