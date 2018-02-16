<?xml version="1.0" encoding="UTF-8" ?>
<xsl: stylesheet xmlns:xsl="http://www.w3.org/TR/WD-xsl">
	<xsl: template match="/">
		<p>Offers:</p>
		<table>
			<tr>
				<th>Наименование</th>
				<th>Цена</th>
				<th>Фасовка</th>
			</tr>
			<xsl:for-each select="/shop/offers/offer">
				<tr>
					<td><xsl:value-of select="name/text()" />"</td>
					<td><xsl:value-of select="price/text()" />"</td>
					<td><xsl:value-of select="pack/text()" />"</td>
				</tr>
			</xsl:for-each>
		</table>
	</xsl:template>
</xsl:stylesheet>