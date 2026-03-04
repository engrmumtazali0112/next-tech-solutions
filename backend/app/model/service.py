from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime
import json


class ServiceCreate(BaseModel):
    title: str
    description: str
    short_description: Optional[str] = None
    icon: Optional[str] = None
    features: Optional[List[str]] = None      # list of feature strings
    price_range: Optional[str] = None
    color_theme: Optional[str] = "blue"
    order_index: int = 0
    is_active: bool = True
    is_featured: bool = False


class ServiceUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    short_description: Optional[str] = None
    icon: Optional[str] = None
    features: Optional[List[str]] = None
    price_range: Optional[str] = None
    color_theme: Optional[str] = None
    order_index: Optional[int] = None
    is_active: Optional[bool] = None
    is_featured: Optional[bool] = None


class ServiceResponse(BaseModel):
    id: int
    title: str
    slug: str
    description: str
    short_description: Optional[str]
    photo_url: Optional[str]
    icon: Optional[str]
    features: Optional[List[str]]   # parsed from JSON string
    price_range: Optional[str]
    color_theme: Optional[str]
    order_index: int
    is_active: bool
    is_featured: bool
    created_at: datetime
    updated_at: Optional[datetime]

    class Config:
        from_attributes = True

    @classmethod
    def model_validate(cls, obj, **kwargs):
        # Parse features JSON string → list
        if hasattr(obj, 'features') and isinstance(obj.features, str):
            try:
                obj.features = json.loads(obj.features)
            except Exception:
                obj.features = []
        return super().model_validate(obj, **kwargs)