from _typeshed import Incomplete
from typing import Any

log: Incomplete

class ImageApiMixin:
    def get_image(self, image: str, chunk_size: int | None = 2097152): ...
    def history(self, image): ...
    def images(self, name: str | None = None, quiet: bool = False, all: bool = False, filters: Incomplete | None = None): ...
    def import_image(
        self,
        src: Incomplete | None = None,
        repository: str | None = None,
        tag: str | None = None,
        image: str | None = None,
        changes: Incomplete | None = None,
        stream_src: bool = False,
    ): ...
    def import_image_from_data(
        self, data, repository: str | None = None, tag: str | None = None, changes: Incomplete | None = None
    ): ...
    def import_image_from_file(
        self, filename: str, repository: str | None = None, tag: str | None = None, changes: Incomplete | None = None
    ): ...
    def import_image_from_stream(
        self, stream, repository: str | None = None, tag: str | None = None, changes: Incomplete | None = None
    ): ...
    def import_image_from_url(
        self, url, repository: str | None = None, tag: str | None = None, changes: Incomplete | None = None
    ): ...
    def import_image_from_image(
        self, image, repository: str | None = None, tag: str | None = None, changes: Incomplete | None = None
    ): ...
    def inspect_image(self, image): ...
    def inspect_distribution(self, image, auth_config: Incomplete | None = None): ...
    def load_image(self, data, quiet: Incomplete | None = None): ...
    def prune_images(self, filters: Incomplete | None = None): ...
    def pull(
        self,
        repository: str,
        tag: str | None = None,
        stream: bool = False,
        auth_config: dict[str, Any] | None = None,
        decode: bool = False,
        platform: str | None = None,
        all_tags: bool = False,
    ): ...
    def push(
        self,
        repository: str,
        tag: str | None = None,
        stream: bool = False,
        auth_config: Incomplete | None = None,
        decode: bool = False,
    ): ...
    def remove_image(self, image: str, force: bool = False, noprune: bool = False): ...
    def search(self, term: str, limit: int | None = None): ...
    def tag(self, image, repository, tag: str | None = None, force: bool = False): ...

def is_file(src: str) -> bool: ...