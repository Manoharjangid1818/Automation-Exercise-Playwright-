package com.automationexercise.base;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class DriverFactory {

    public static WebDriver driver;

    public static WebDriver initializeDriver() {

        WebDriverManager.chromedriver().setup();

        ChromeOptions options = new ChromeOptions();

        options.addArguments("--start-maximized");

        driver = new ChromeDriver(options);

        return driver;
    }

    public static void quitDriver() {

        if (driver != null) {
            driver.quit();
        }
    }
}