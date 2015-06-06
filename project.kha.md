Kha uses a JSON file called project.kha to organize the assets of your project and some essential project data. A basic project.kha looks like this:

```json
{
	"format": 2,
	"game":
	{
		"name": "SML",
		"width": 600,
		"height": 520
	},
	"assets":
	[
		{
			"type": "image",
			"file": "blockcoin.png",
			"name": "blockcoin"
		},
		{
			"type": "sound",
			"file": "coin",
			"name": "coin"
		},
		{
			"type": "music",
			"file": "music1",
			"name": "music1"
		},
		{
			"type": "blob",
			"file": "level.map",
			"name": "level.map"
		}
	],
	"rooms":
	[
		{
			"name": "level1",
			"parent": null,
			"neighbours": [],
			"assets":
			[
				"blockcoin",
				"coin",
				"music1",
				"level.map"
			]
		}
	]
}
```

 Kha supports five different types of assets:
### image
For all kinds of images. You can provide images in jpeg, png, tga, bmp or gif format. All images are currently converted to png before actual use.
### sound
For small sound files in wav format. This is converted to different formats dependent on the target system.
### music
For large sound files in wav format which will be streamed at runtime. This is converted to different formats dependent on the target system.
### video
For video files. These are currently not converted automatically.
### blob
For binary blobs / everything else - provides a byte array at runtime.

Assets are organized in rooms. Typically a room corresponds to a level in a game. A room can have a parent room - when a room is loaded, all assets of that room are loaded as well as all assets of all parents. Applications typically use just one room.

##Additional Sources

Additional sources can be specified as such:
```json
"sources": 
	[
		"SomeLibraryFolder",
		"AnotherLibrary/src"
	]
```