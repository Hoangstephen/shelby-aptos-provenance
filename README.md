# 🛡️ Shelby-Aptos Provenance Pipeline

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Aptos](https://img.shields.io/badge/Network-Aptos-blue)](https://aptoslabs.com/)
[![Shelby](https://img.shields.io/badge/Storage-Shelby-orange)](https://shelby.xyz/)

An enterprise-grade implementation for anchoring AI training datasets and model weights onto the **Shelby Global Object Storage** layer with cryptographic verification on **Aptos**.

## 🚀 Key Advantages

* **70% Egress Reduction:** Slash your cloud bill by moving away from legacy S3 providers.
* **Single Global Namespace:** Write once, read anywhere via DoubleZero’s dedicated fiber backbone.
* **Immutable Provenance:** Every asset is anchored on-chain, providing a transparent audit trail for AI model lineage.
* **High Performance:** Designed specifically for the high-velocity data needs of modern AI/ML clusters.

## 🛠️ Tech Stack

- **Storage:** [Shelby Global Object Storage](https://docs.shelby.xyz/)
- **Blockchain:** [Aptos (Testnet)](https://aptos.dev/)
- **Runtime:** Node.js (JavaScript)

## 📦 Quick Start

1. **Clone & Install:**
   ```bash
   git clone [https://github.com/anhnguyenhoang/shelby-aptos-provenance.git](https://github.com/anhnguyenhoang/shelby-aptos-provenance.git)
   cd shelby-aptos-provenance
   npm install
Create a .env file based on .env.example:

SHELBY_API_KEY=your_key
SHELBY_SECRET=your_secret

Execution:

Bash
npm start

📄 License
Distributed under the MIT License. See LICENSE for more information.

Built by Nguyễn Hoàng Anh during the Shelby Early Access program.
