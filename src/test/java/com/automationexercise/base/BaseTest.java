package com.automationexercise.base;

import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

public class BaseTest {

    public WebDriver driver;

    @BeforeMethod
    public void setup() {

        driver = DriverFactory.initializeDriver();

        driver.get("https://automationexercise.com/");
    }

    @AfterMethod
    public void tearDown() {

        DriverFactory.quitDriver();
    }
}