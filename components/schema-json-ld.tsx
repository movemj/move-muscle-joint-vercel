/**
 * JSON-LD Schema Component
 * Renders schema as a script tag in the document head
 */

interface SchemaProps {
  data: Record<string, any>;
}

export function JsonLdSchema({ data }: SchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      suppressHydrationWarning
    />
  );
}
