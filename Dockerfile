FROM gradle:jdk17 AS build
WORKDIR /app
COPY build.gradle .
COPY settings.gradle .
COPY gradle gradle
COPY src src
RUN gradle build

FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar
CMD ["java", "-jar", "app.jar"]
