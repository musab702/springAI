package com.ai.SpringAiDemo;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.ai.image.ImageResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
public class GenAiController {

    private final ChatService chatService;
    private final ImageService imageService;
    private final RecipeService recipeService;

    public GenAiController(ChatService chatService, ImageService imageService, RecipeService recipeService) {
        this.chatService = chatService;
        this.imageService = imageService;
        this.recipeService = recipeService;
    }

    @GetMapping("ask-ai")
    public String getResponse(@RequestParam String prompt){
        return chatService.getResponse(prompt);
    }

    @GetMapping("ask-ai-options")
    public String getResponseOptions(@RequestParam String prompt){
        return chatService.getResponseOptions(prompt);
    }

    //for a single image generated (i.e just one URL)
//    @GetMapping("generate-image")
//    public void generateImages(HttpServletResponse response, @RequestParam String prompt) throws IOException {
//        ImageResponse imageResponse = imageService.generateImage(prompt);
//        String imageURL = imageResponse.getResult().getOutput().getUrl();
//        response.sendRedirect(imageURL);
//    }

    //use this for multiple images generated, i.e multiple url as set by the parameter n
    @GetMapping("generate-image")
    public List<String> generateImages(HttpServletResponse response,
                                       @RequestParam String prompt,
                                       @RequestParam(defaultValue = "hd")String quality,
                                       @RequestParam(defaultValue = "1")int n,
                                       @RequestParam(defaultValue = "1024")int width,
                                       @RequestParam(defaultValue = "1024")int height) throws IOException {
        ImageResponse imageResponse = imageService.generateImage(prompt, quality,n, width, height);

        //Streams to get urls from image response
        List<String> imageURLs = imageResponse.getResults().stream()
                .map(result->result.getOutput().getUrl())
                .toList();
        return imageURLs;
    }

    @GetMapping("recipe-creator")
    public String recipeCreator(@RequestParam String ingredients,
                                      @RequestParam(defaultValue = "any") String cuisine,
                                      @RequestParam(defaultValue = "") String dietaryRestrictions){
        return recipeService.createRecipe(ingredients, cuisine, dietaryRestrictions);
    }

}
