package StepDefinitions;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;

import java.util.concurrent.TimeUnit;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

@RunWith(Cucumber.class)
public class StepDefinition {
	
	public WebDriver driver;

    @Given("^user is on Landingpage$")
    public void user_is_on_landingpage() throws Throwable {
    	
    	driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().window().maximize();
    	driver.get("http://live.guru99.com/index.php/");
       
    }

    @When("^user clicks Login link$")
    public void user_clicks_login_link() throws Throwable {
    	driver.findElement(By.linkText("MY ACCOUNT")).click();
       
    }

    @Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_enters_username_and_passsword(String username, String password) throws Throwable {
    	driver.findElement(By.id("email")).sendKeys(username);
		driver.findElement(By.id("pass")).sendKeys(password);
		driver.findElement(By.id("send2")).click();
    }

    @Then("^user is on homepage$")
    public void user_is_on_homepage() throws Throwable {
       
    }

    @Then("^username is displayed on homepage$")
    public void username_is_displayed_on_homepage() throws Throwable {
        
    }

    @And("^user clicks Login button$")
    public void user_clicks_login_button() throws Throwable {
    	System.out.println("Login page");
    }

}