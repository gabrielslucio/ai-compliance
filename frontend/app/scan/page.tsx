"use client";

import { useState } from "react";

import { scanContent } from "../../services/scanner.service";

import { ScanResult } from "../../types/scan-result";

import { PageContainer } from "../../components/ui/PageContainer";
import { PageHeader } from "../../components/ui/PageHeader";

import { ScannerInputCard } from "../../components/scanner/ScannerInputCard";
import { ScanResults } from "../../components/scanner/ScanResults";


export default function ScanPage() {
  const [content, setContent] = useState("");

  const [result, setResult] = useState<ScanResult | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  async function handleScan() {
    if (!content.trim()) {
      return;
    }

    try {
      setIsLoading(true);

      const data = await scanContent(content);

      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <PageContainer>
      <PageHeader
        title="AI Compliance Scanner"
        description="Scan, classify and protect sensitive information."
      />

      <ScannerInputCard
        content={content}
        onChange={(event) =>
          setContent(event.target.value)
        }
        onScan={handleScan}
        isLoading={isLoading}
      />

      {result && (
        <ScanResults
          result={result}
        />
      )}
    </PageContainer>
  );
}