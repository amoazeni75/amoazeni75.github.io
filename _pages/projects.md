---
layout: page
title: projects
permalink: /projects/
description: Selected research projects
nav: true
nav_order: 3
---

## Research Projects

### Generative Recurrent Dynamic Range Extension

**Goal:** Single-image HDR reconstruction without multi-exposure stacks

- Formulated single-image HDR reconstruction as iteratively extending dynamic range by one exposure value, enabling a recurrent network to recover complex scenes
- Trained on a mix of HDR and RAW data to learn a generative prior that hallucinates realistic structure in large clipped regions while remaining stable across many extension steps
- Enables high-quality HDR reconstruction from a single LDR image

---

### IMLE-LLM: Speeding up LLMs with IMLE

**Goal:** Reduce LLM inference latency through parallel token generation

- Used implicit maximum likelihood estimation (IMLE) to distill a teacher LLM into a conditional student that jointly predicts K future tokens
- Designed a parallel decoding scheme that reduces latency while preserving the teacher's distribution, diversity, and downstream performance
- Achieves significant speedup without sacrificing generation quality

---

### Image2Blocks: Reconstructing Images in 3D using Cuboids

**Goal:** Monocular 3D scene understanding using primitive-based representation

- Formulated monocular image understanding as reconstructing scenes using 3D cuboid primitives rather than only 2D attributes
- Combined monocular depth and point-cloud reconstruction to infer layout, free space, and occlusions in globally consistent 3D scene models
- Enables intuitive 3D scene editing and manipulation

---

### Text-Guided Diverse Image-To-Image Translation

**Goal:** Controllable and diverse image transformation using natural language

- Developed a model for text-guided image-to-image translation that preserves the main object while applying text-specified transformations
- Leveraged pre-trained language embeddings and conditional image synthesis to produce realistic, diverse outputs aligned with the text prompt
- Supports creative applications like style transfer, object modification, and scene editing through natural language

---

## Industrial Projects

### IoT2Cloud Platform

**Role:** Co-designer and ML Lead

- Co-designed and delivered IoT2Cloud platform for web, iOS, and Android
- Integrated LLM-based natural language to UI-component generation
- Built custom evaluation framework and curated UI component dataset
- Successfully deployed across multiple platforms with real-world usage

---

### Offline Voice Assistant

**Role:** Lead ML Specialist

- Designed and deployed offline voice assistant models on embedded boards and smartphones
- Enabled on-device speech recognition and intent understanding without internet connectivity
- Optimized for resource-constrained embedded environments
- Achieved production-quality accuracy and latency

---

### Vital Sign Monitoring System

**Role:** Team Leader

- Led development of transformer-based models for blood pressure estimation and vital-sign forecasting
- Processed PPG, ECG, and other vital signals for medical applications
- Deployed models meeting medical device accuracy requirements
- Optimized for real-time inference on edge devices

---

### Maya i-Box - Intelligent Embroidery System

**Role:** A.I. Developer and Product Manager

- Developed and launched Maya i-Box, an intelligent embroidery design system
- Converts photographs and touchscreen sketches into optimized DST stitch files
- Designed complete computer vision and image-processing pipeline in C++/Qt
- Implemented computational geometry and graph-based optimization algorithms
- Successfully deployed in industrial production environments

