package com.email.email_writer.app;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class EmailGeneratorService {

    private final WebClient webClient;

    @Value("${gemini.api.url}")
    private String geminiApiUrl;

    @Value("${gemini.api.key}")
    private String GEMINI_API_KEY;

    public EmailGeneratorService(WebClient.Builder webClient) {
        this.webClient = webClient.build();
    }


   public String generateEmailReply(EmailRequest emailRequest) {
    String prompt = buildPrompt(emailRequest);

    // Build request body properly
    Map<String, Object> part = Map.of("text", prompt);
Map<String, Object> content = Map.of("parts", List.of(part));
Map<String, Object> requestBody = Map.of("contents", List.of(content));


    String response = webClient.post()
        .uri(geminiApiUrl)
        .header("Content-Type", "application/json")
        .header("X-goog-api-key", GEMINI_API_KEY)
        .bodyValue(requestBody)
        .retrieve()
        .bodyToMono(String.class)
        .block();

    return extractResponseContent(response);
}


   private String extractResponseContent(String response) {
    try {
        ObjectMapper mapper = new ObjectMapper();
        JsonNode rootNode = mapper.readTree(response);

        return rootNode
            .path("candidates").get(0)
            .path("content")
            .path("parts").get(0)
            .path("text").asText();
    } catch (Exception e) {
        return "Error processing request: " + e.getMessage();
    }
}

    private String buildPrompt(EmailRequest emailRequest) {
        StringBuilder prompt = new StringBuilder();
        prompt.append("generate just a email only ,just a email not options of email reply's and generate them based on tone mentioned  or else professional way if no tone mentioned :\n");

        if(emailRequest.getTone()!=null && !emailRequest.getTone().isEmpty()){
            prompt.append("Use a").append(emailRequest.getTone()).append("tone");
        }
        prompt.append("\nOriginal email:\n").append(emailRequest.getEmailContent());
        return prompt.toString();
    }
    
}
