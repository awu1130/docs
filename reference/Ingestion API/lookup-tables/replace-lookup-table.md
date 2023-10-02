---
title: "Replace a Lookup Table"
slug: "replace-lookup-table"
excerpt: "Replace the contents of an existing Lookup Table.\n***\n[block:api-header]\n{\n  \"title\": \"Validation\"\n}\n[/block]\n* The first column of the lookup table is assumed to be the ID of the row. All ID values must be unique.\n* The first row of the lookup table is a header row. The values in the header must be unique, as each one uniquely identifies a column of the table. These will appear as properties of the lookup table in Mixpanel's UI.\n* The CSV must be valid according to RFC4180.\n* If the `Content-Encoding: gzip` header is supplied, the table will be decompressed before parsing.\n[block:api-header]\n{\n  \"title\": \"Types\"\n}\n[/block]\n* Integers or floats will be parsed as numbers.\n* RFC3339 timestamps (`2021-08-21T05:36:01Z`) will parsed as datetimes.\n* `true` or `false` (case-insensitive) will be parsed as boolean.\n* Empty fields (two adjacent commas) will be treated as `undefined`\n* Comma separated, quoted strings in square brackets (`\"[\"\"Free\"\",\"\"Paid\"\",\"\"Enterprise\"\"]\"`) will be parsed as list of strings.\n* All other values will be treated as strings.\n\n[block:code]\n{\n  \"codes\": [\n    {\n      \"code\": \"id,artist,genre,is_platinum,name,num_listens,release_date,is_top_40,countries\\nc994bb,Drake,Pop,True,Hotline Bling,1700000000,2015-10-18T22:00:00,true,[]\\nd8d949,Gipsy Kings,Flamenco,False,Bamboleo,1170000,1987-07-12T05:00:00,false,\\\"[\\\"\\\"US\\\"\\\",\\\"\\\"CA\\\"\\\"]\\\"\\na43fb8,Daft Punk,House,False,Aerodynamic,41000000,2001-03-12T07:30:00,false,\\\"[\\\"\\\"IN\\\"\\\"]\\\"\\n\",\n      \"language\": \"text\",\n      \"name\": \"sample.csv\"\n    }\n  ]\n}\n[/block]\n\n[block:api-header]\n{\n  \"title\": \"Errors\"\n}\n[/block]\nLookup Tables are replaced in their entirety or not replaced at all. When the Lookup Table fails to meet the above validation, we return an error that looks as follows:\n[block:code]\n{\n  \"codes\": [\n    {\n      \"code\": \"{\\n  \\\"error\\\": \\\"some data points in the request failed validation\\\",\\n  \\\"failed_records\\\": [\\n    {\\n      \\\"index\\\": 2,\\n      \\\"message\\\": \\\"invalid row: row indexes 1 and 2 have the same primary key\\\"\\n    },\\n    {\\n      \\\"index\\\": 3,\\n      \\\"message\\\": \\\"invalid row: wrong number of fields\\\"\\n    }\\n  ],\\n  \\\"status\\\": 0\\n}\",\n      \"language\": \"json\"\n    }\n  ]\n}\n[/block]\nWe will return at most the first 10 rows that failed validation.\n[block:api-header]\n{\n  \"title\": \"Limits\"\n}\n[/block]\nThis endpoint will return a 429 error if called more than 100 times in a rolling 24 hour window. We recommend updating lookup tables at most hourly to stay within this limit.\n\nThis endpoint will return a 413 error if a Lookup Table exceeds 100MB uncompressed. In practice, this translates to 1-2M rows. If you have a lookup table that exceeds the limit, we recommend pruning the number of columns to those that are useful to analysis. Removing long URLs or user-generated content can bring a lookup table within this limit. If you still exceed the limit, please reach out to us at apis@mixpanel.com -- we'd love to hear your use case!\n[block:api-header]\n{\n  \"title\": \"Legacy API\"\n}\n[/block]\nOur [legacy lookup tables API](https://developer.mixpanel.com/v2.60/reference/lookup-tables) is now deprecated; we strongly recommend transitioning to this API."
hidden: false
createdAt: "2021-10-05T01:49:31.011Z"
updatedAt: "2023-09-26T21:06:39.089Z"
---