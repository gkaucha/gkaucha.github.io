---
position: 1
---

# Prerequisites for building SIEM Tool

What makes a good Security Operation Center(SOC) Stack?


## Log Ingestion

- Collect logs origination on endpoint devices, network devices, or 3rd party services.
- Normalize the log fields to a universal name for faster search and better visuslization. For example: source_ip, source_ipv4 can be both written as src_ip field.
- Ensure caching of logs if backedn storage is busy or offline.

## Log Analysis

- Analyze logs received
- Determine the severity of the lgos ingested via log analysis. Supported ability for custom rules.
- Ability to discard noisy alerts to limit overflow of unnecessary data.

## Backend Storage

- Store received logs for periods of time
- Fast searching and viewing of data
- Ability to provide access controls to stored logs

## Visualization

- Ability to view logs via widgets/dasboards etc.
- Fast searching and viewing of data
- Support the ability to read from multiple log storages like elasticsearch, MySQL etc.

## Intelligence Enrichment

- Enrich your received log with threat intelligence gathered from various products
- Ability to parse and store selected responses so that only crucial data is stored
- Automated so that you SOC(Security Operation Center) analysis are not having to manually attempt to enrich received logs.

## Case Management

- Platform to view and react to HIGH severity events
- Allow collaboration with multiple SOC analysis
- Allow responsive actions so that analysts can trigger events on their endpoints

## Automation

- SOAR platform
- Ability to automate workflows in response to critical alerts, failed healthchecks, or ticket analysis
- Fully customizable and fast

## Investigation

- Incident Response
- Quarantine a device
- Ability to remotely collect endpoint forensics


## Health Monitoring

- Monitor resources consumed on endpoints
- Monitor services / process whose stoppage would cause operational impact
- Ability to alert in real time when health check thresholds are met